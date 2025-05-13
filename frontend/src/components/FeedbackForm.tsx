'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [gradeLevel, setGradeLevel] = useState('6th');
  const [feedback, setFeedback] = useState('');

  const resetForm = () => {
    setText('');
    setFeedback('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback('Loading feedback...');
    try {
      const res = await fetch(
        'https://learnlift-3gca.onrender.com/api/feedback',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, grade_level: gradeLevel }),
        }
      );
      const data = await res.json();
      setFeedback(data.feedback);
    } catch {
      setFeedback('Error getting feedback. Please try again.');
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Welcome to LearnLift
        </h1>
        <p className="text-gray-300 mb-6">
          Get instant, personalized feedback on your writing — built
          with AI to help you grow.
        </p>

        <ul className="flex space-x-4 mb-6 text-sm text-gray-300">
          <li className="before:content-['1.'] before:mr-1">Write</li>
          <li className="before:content-['2.'] before:mr-1">
            Choose Grade
          </li>
          <li className="before:content-['3.'] before:mr-1">
            Get Feedback
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="space-y-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
            className="w-full p-3 border rounded bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
            placeholder="Paste your writing here..."
            required
          />
          <p className="text-sm text-gray-400 text-right">
            {text.length} / 1000 characters
          </p>

          <div>
            <label htmlFor="grade" className="block mb-1">
              Select Grade Level:
            </label>
            <select
              id="grade"
              value={gradeLevel}
              onChange={(e) => setGradeLevel(e.target.value)}
              className="w-full p-2 border rounded bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
            >
              <option value="5th">5th Grade</option>
              <option value="6th">6th Grade</option>
              <option value="7th">7th Grade</option>
              <option value="8th">8th Grade</option>
              <option value="9th">9th Grade</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded"
          >
            Get Feedback
          </button>
        </form>

        {feedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-4 bg-white text-gray-900 rounded shadow"
          >
            <h2 className="font-bold mb-2 text-green-700">
              AI Feedback:
            </h2>
            <p className="leading-relaxed whitespace-pre-line">
              {feedback}
            </p>
          </motion.div>
        )}

        {feedback && (
          <div className="text-center mt-4">
            <button
              onClick={resetForm}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded"
            >
              Try Another
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
