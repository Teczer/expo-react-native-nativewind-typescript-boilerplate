# Autogenerated by fastlane
#
# Ensure this file is checked in to source control!

source "https://rubygems.org"

# You may use http://rbenv.org/ or https://rvm.io/ to install and use this version
ruby '>= 3.1.4'

# Cocoapods 1.15 introduced a bug which break the build. We will remove the upper
# bound in the template on Cocoapods with next React Native release.
gem 'cocoapods', '>= 1.13', '!= 1.15.0', '!= 1.15.1'
gem 'activesupport', '>= 6.1.7.5', '!= 7.1.0'

# FIXME for now the version 1.26 turn the flag ENABLE_USER_SCRIPT_SANDBOXING to YES which declench a problem in build
gem 'xcodeproj', '1.25.0'

gem 'concurrent-ruby', '< 1.3.4'

plugins_path = File.join(File.dirname(__FILE__), 'fastlane', 'Pluginfile')
eval_gemfile(plugins_path) if File.exist?(plugins_path)
