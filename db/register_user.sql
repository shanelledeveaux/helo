insert into helouser(username, password)
values($1, $2)
returning *;