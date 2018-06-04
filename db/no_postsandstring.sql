select p.id, p.title, p.img, p.content, u.username, u.profile_pic from posts p
join helouser u on u.id = p.author_id WHERE u.id != $1