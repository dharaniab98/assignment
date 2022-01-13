#!/bin/bash
until mysql -h mysql1 -uapp_user -ppassword -e 'select 1'; do
  >&2 echo "mysql1 is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "mysql is up - executing command"
exec "$@"

exec npm run start-docker