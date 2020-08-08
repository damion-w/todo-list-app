INSERT INTO users 
(first_name, last_name, username, email)
VALUES
('test1', 'user1', 'testuser1', 'testuser1@testusers.com'),
('test2', 'user2', 'testuser2', 'testuser2@testusers.com'), 
('test3', 'user3', 'testuser3', 'testuser3@testusers.com'),
('test4', 'user4', 'testuser4', 'testuser4@testusers.com'),
('Bilen', 'Eshetu', 'bilen', 'bilen@bilen.com'),
('Sofia', 'Wiltshire', 'sofia', 'sofia@sofia.com'),
('Noah', 'Wiltshire', 'noah', 'noah@noah.com');

INSERT INTO todos
(title, description, category, status, user_id)
VALUES
('Grocery shopping', 'Buy oat milk, bacon, and salt and vinegar potato chips', 'To Do', 1),
('Vaccuum', NULL, 'Complete', 1),
('Clean bathroom', 'Clean sink, toilet, and tub', 'To Do', 2),
('Vaccuum', NULL, 'To Do', 2),
('Cook', 'Cook drunken noodles with beef', 'Complete', 3),
('Eat', NULL, 'To Do', 3),
('Clean bedroom', 'Sweep and change bedsheets', 'To Do', 4),
('Make grocery list', NULL, 'Complete', 4),
('Organize toys', NULL, 'To do', 6),
('Make slime', NULL, 'Complete', 6),
('Draw', 'Draw cars', 'To do', 7),
('Pick movie for movie night', 'Pick between Monsters Inc. and The Little Mermaid', 'To do', 7),