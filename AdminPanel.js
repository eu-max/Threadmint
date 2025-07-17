import React from 'react';

const sampleSubmissions = [
  { id: 1, name: 'Alice', email: 'alice@example.com', style: 'Goth', notes: 'Black lace dress' },
  { id: 2, name: 'Bob', email: 'bob@example.com', style: 'Urban', notes: 'Hoodie with zips' }
];

export default function AdminPanel() {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Design Submissions</h2>
      {sampleSubmissions.map(sub => (
        <div key={sub.id} className="border border-crimson p-2 mb-2">
          <p><strong>Name:</strong> {sub.name}</p>
          <p><strong>Email:</strong> {sub.email}</p>
          <p><strong>Style:</strong> {sub.style}</p>
          <p><strong>Notes:</strong> {sub.notes}</p>
        </div>
      ))}
    </div>
  );
}