'use client';

import { useState } from 'react';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [gradeLevel, setGradeLevel] = useState('8th');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback('');

    try {
      const res = await fetch('http://localhost:8000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, grade_level: gradeLevel }),
      });

      const data = await res.json();
      setFeedback(data.feedback);
    } catch (err) {
      setFeedback('Error getting feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Get Feedback on Your Writing
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          className="w-full p-3 border rounded bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
          placeholder="Paste your writing here..."
          required
        />
        <select
          value={gradeLevel}
          onChange={(e) => setGradeLevel(e.target.value)}
          className="p-2 border rounded bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
        >
          <option>6th</option>
          <option>7th</option>
          <option>8th</option>
          <option>9th</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Getting Feedback...' : 'Submit'}
        </button>
      </form>

      {feedback && (
        <div className="mt-6 p-4 bg-white text-gray-900 rounded shadow max-w-xl">
          <h2 className="font-bold mb-2 text-green-700">
            AI Feedback:
          </h2>
          <p className="leading-relaxed whitespace-pre-line">
            {feedback}
          </p>
        </div>
      )}
    </div>
  );
}
