import express from 'express';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
//require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

// Create a new Express app
const app = express();

// Set up Supabase client
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
