-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  bio TEXT NOT NULL,
  avatar TEXT NOT NULL,
  social JSONB NOT NULL DEFAULT '{}'
);

-- Insert sample data
INSERT INTO profiles (name, title, bio, avatar, social)
VALUES
  (
    'Alex Johnson',
    'Product Designer',
    'Passionate about creating intuitive user experiences and beautiful interfaces.',
    '/placeholder.svg?height=400&width=400',
    '{"twitter": "#", "github": "#", "linkedin": "#", "email": "alex@example.com"}'
  ),
  (
    'Sam Rivera',
    'Frontend Developer',
    'Building responsive and accessible web applications with modern frameworks.',
    '/placeholder.svg?height=400&width=400',
    '{"twitter": "#", "github": "#", "linkedin": "#"}'
  ),
  (
    'Taylor Kim',
    'UX Researcher',
    'Conducting user research to inform product decisions and improve experiences.',
    '/placeholder.svg?height=400&width=400',
    '{"twitter": "#", "linkedin": "#", "email": "taylor@example.com"}'
  ),
  (
    'Jordan Patel',
    'Backend Engineer',
    'Architecting scalable systems and optimizing database performance.',
    '/placeholder.svg?height=400&width=400',
    '{"github": "#", "linkedin": "#", "email": "jordan@example.com"}'
  ),
  (
    'Morgan Chen',
    'Project Manager',
    'Coordinating teams and ensuring projects are delivered on time and within scope.',
    '/placeholder.svg?height=400&width=400',
    '{"twitter": "#", "linkedin": "#", "email": "morgan@example.com"}'
  ),
  (
    'Casey Wilson',
    'DevOps Engineer',
    'Automating deployment processes and maintaining infrastructure reliability.',
    '/placeholder.svg?height=400&width=400',
    '{"github": "#", "linkedin": "#", "email": "casey@example.com"}'
  ),
  (
    'Riley Smith',
    'Content Strategist',
    'Crafting compelling narratives and developing content that resonates with users.',
    '/placeholder.svg?height=400&width=400',
    '{"twitter": "#", "linkedin": "#", "email": "riley@example.com"}'
  ),
  (
    'Jamie Garcia',
    'Data Scientist',
    'Analyzing data patterns to extract insights and drive business decisions.',
    '/placeholder.svg?height=400&width=400',
    '{"github": "#", "linkedin": "#", "email": "jamie@example.com"}'
  );

-- Enable Row Level Security but allow public access for this demo
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access"
  ON profiles
  FOR SELECT
  TO public
  USING (true);

-- Create policy to allow authenticated users to insert
CREATE POLICY "Allow authenticated insert"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (true);
