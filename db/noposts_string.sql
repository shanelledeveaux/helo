select p.title, p.img, p.content, u.username, u.profile_pic from posts p
join users u on u.id = p.auhor_id