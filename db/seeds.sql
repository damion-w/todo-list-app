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
('Grocery shopping', 'Buy oat milk, bacon, and salt and vinegar potato chips', 'Chores', 'To Do', 1),
('Vaccuum', NULL, 'Cleaning', 'Complete', 1),
('Clean bathroom', 'Clean sink, toilet, and tub', 'Chores', 'To Do', 2),
('Vaccuum', NULL, 'Chores', 'To Do', 2),
('Cook', 'Cook drunken noodles with beef', 'Cooking', 'Complete', 3),
('Eat', NULL, 'Nurishment', 'To Do', 3),
('Clean bedroom', 'Sweep and change bedsheets', 'Chores', 'To Do', 4),
('Make grocery list', NULL, 'Shopping', 'Complete', 4),
('Organize toys', NULL, 'NOOO!!!', 'To do', 6),
('Make slime', NULL, 'YAASSSS!!!', 'Complete', 6),
('Draw', 'Draw cars', 'Art', 'To do', 7),
('Pick movie for movie night', 'Pick between Monsters Inc. and The Little Mermaid', 'FUN!', 'To do', 7);