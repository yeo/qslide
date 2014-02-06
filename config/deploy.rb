require 'mina/git'

# Basic settings:
#   domain       - The hostname to SSH to.
#   deploy_to    - Path to deploy into.
#   repository   - Git repo to clone from. (needed by mina/git)
#   branch       - Branch name to deploy. (needed by mina/git)

set :user, 'kurei'
set :domain, 'qslide.axcoto.com'
set :deploy_to, "#{ENV['AXCOTO_SRV_DIR']}qslide.axcoto.com"
set :repository, 'https://github.com/qSlide/qslide.git'
set :branch, 'master'
set :keep_releases, 1 

# Manually create these paths in shared/ (eg: shared/config/database.yml) in your server.
# They will be linked in the 'deploy:link_shared_paths' step.
set :shared_paths, ['config.json']

# Optional settings:
#   set :user, 'foobar'    # Username in the server to SSH to.
set :port, '23512'     # SSH port number.

# This task is the environment that is loaded for most commands, such as
# `mina deploy` or `mina rake`.
task :environment do
  # If you're using rbenv, use this to load the rbenv environment.
  # Be sure to commit your .rbenv-version to your repository.
  # invoke :'rbenv:load'

  # For those using RVM, use this to load an RVM version@gemset.
  # invoke :'rvm:use[ruby-1.9.3-p125@default]'
end

# Put any custom mkdir's in here for when `mina setup` is ran.
# For Rails apps, we'll make some of the shared paths that are shared between
# all releases.
task :setup => :environment do
  queue! %[touch "#{deploy_to}/shared/wp-config.php"]
  queue  %[echo "-----> Be sure to edit 'shared/wp-config.php'."]

  # install go stuff
  queue %[go get "github.com/codegangsta/martini"]
  queue %[go get "github.com/codegangsta/martini-contrib/render"]
  queue %[go get "github.com/codegangsta/martini-contrib/session"]
  queue %[go get "github.com/sirsean/go-mailgun/mailgun"]
end

desc "Deploys the current version to the server."
task :deploy => :environment do
  deploy do
    # Put things that will set up an empty directory into a fully set-up
    # instance of your project.
    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'
    #invoke :'bundle:install'
    #invoke :'rails:db_migrate'
    #invoke :'rails:assets_precompile'
  
    queue "curl -d \"room_id=QSlide&from=BuildBot&message=Deploy+Status:+Started&color=green\" \"https://api.hipchat.com/v1/rooms/message?auth_token=2ae557614c0fae56e176ae7e282bcb&format=json\""
    
    to :launch do
      #kill the old ones
      run "killall ./qs"

      run "curl -d \"room_id=QSlide&from=BuildBot&message=Deploy+Status:+Starting&color=green\" https://api.hipchat.com/v1/rooms/message?auth_token=2ae557614c0fae56e176ae7e282bcb&format=json"
      queue "export GOPATH=\"/home/kurei/go\";cd #{deploy_to}/current && go build qs.go"
      #queue "touch #{deploy_to}/tmp/restart.txt"
      #queue "cd #{deploy_to}/current; nohup ./qs >qslide.log 2>&1 </dev/null &"
      run "curl -d \"room_id=QSlide&from=BuildBot&message=Deploy+Status:+Done&color=green\" \"https://api.hipchat.com/v1/rooms/message?auth_token=2ae557614c0fae56e176ae7e282bcb&format=json\""
    end

    queue "curl -d \"room_id=QSlide&from=BuildBot&message=Deploy+Status:+Start+Cleanup&color=yellow\" \"https://api.hipchat.com/v1/rooms/message?auth_token=2ae557614c0fae56e176ae7e282bcb&format=json\""
    invoke :'deploy:cleanup'
    queue "curl -d \"room_id=QSlide&from=BuildBot&message=Deploy+Status:+Done&color=green\" \"https://api.hipchat.com/v1/rooms/message?auth_token=2ae557614c0fae56e176ae7e282bcb&format=json\""
  end
end

task :clean_cache => :environment do 
  queue! %[rm -rf "/var/cache/nginx/qslide/*"]
end

task :start => :environment do
  queue %[echo "---> Start"]
  queue "cd #{deploy_to}/current; nohup ./qs >qslide.log 2>&1 </dev/null &"
  queue %[echo "$(ps -Af | grep qs)"]
  queue %[echo "---> Done"]
end

# For help in making your deploy script, see the Mina documentation:
#
#  - http://nadarei.co/mina
#  - http://nadarei.co/mina/tasks
#  - http://nadarei.co/mina/settings
#  - http://nadarei.co/mina/helpers

