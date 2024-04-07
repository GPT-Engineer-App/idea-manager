import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function App() {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState({ title: "", description: "", tags: [] });
  const [editingIdea, setEditingIdea] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIdea({ ...newIdea, [name]: value });
  };

  const handleTagChange = (e) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setNewIdea({ ...newIdea, tags });
  };

  const handleAddIdea = () => {
    if (newIdea.title && newIdea.description) {
      setIdeas([...ideas, { ...newIdea, id: Date.now() }]);
      setNewIdea({ title: "", description: "", tags: [] });
    }
  };

  const handleEditIdea = (idea) => {
    setEditingIdea(idea);
    setNewIdea({ title: idea.title, description: idea.description, tags: idea.tags });
  };

  const handleUpdateIdea = () => {
    setIdeas(ideas.map((idea) => (idea.id === editingIdea.id ? { ...newIdea, id: editingIdea.id } : idea)));
    setEditingIdea(null);
    setNewIdea({ title: "", description: "", tags: [] });
  };

  const handleDeleteIdea = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  return (
    <div data-theme="mytheme" className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Idea Manager</h1>
      <div className="mb-8">
        <input type="text" name="title" placeholder="Idea Title" value={newIdea.title} onChange={handleInputChange} className="input input-bordered w-full mb-2" />
        <textarea name="description" placeholder="Idea Description" value={newIdea.description} onChange={handleInputChange} className="textarea textarea-bordered w-full mb-2"></textarea>
        <input type="text" name="tags" placeholder="Tags (comma-separated)" value={newIdea.tags.join(", ")} onChange={handleTagChange} className="input input-bordered w-full mb-2" />
        <button onClick={editingIdea ? handleUpdateIdea : handleAddIdea} className="btn btn-primary">
          {editingIdea ? "Update Idea" : "Add Idea"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <div key={idea.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{idea.title}</h2>
              <p>{idea.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{idea.tags.join(", ")}</div>
                <button onClick={() => handleEditIdea(idea)} className="btn btn-square btn-sm">
                  <FaEdit />
                </button>
                <button onClick={() => handleDeleteIdea(idea.id)} className="btn btn-square btn-sm">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
