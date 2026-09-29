import { useState } from 'react';
function App() {
// Временни (mock) данни за тестване на UI
const [movies, setMovies] = useState([
{ id: 1, title: 'Inception', genre: 'Sci-Fi' },
{ id: 2, title: 'The Dark Knight', genre: 'Action' }
]);
const [title, setTitle] = useState('');
const [genre, setGenre] = useState('');
// Временна функция за добавяне
const handleSubmit = (e) => {
e.preventDefault();
if (!title || !genre) return;
const newMovie = { id: Date.now(), title, genre };
setMovies([...movies, newMovie]);

setTitle('');
setGenre('');
};
// Временна функция за изтриване
const handleDelete = (id) => {
setMovies(movies.filter(movie => movie.id !== id));
};
return (
<div className="container mt-5" style={{ maxWidth: '600px' }}>
<h1 className="text-center mb-4">🎬 Моят Филмов Списък</h1>
{/* Форма за добавяне */}
<div className="card p-4 mb-4 shadow-sm">
<form onSubmit={handleSubmit} className="row g-2">
<div className="col-md-5">
<input
type="text"
className="form-control"
placeholder="Заглавие..."
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
</div>
<div className="col-md-5">
<input
type="text"
className="form-control"
placeholder="Жанр..."
value={genre}
onChange={(e) => setGenre(e.target.value)}
/>
</div>
<div className="col-md-2">
<button type="submit" className="btn btn-primary w-100">+</button>
</div>
</form>
</div>
{/* Списък с филми */}
<ul className="list-group">
{movies.map((movie) => (

<li key={movie.id} className="list-group-item d-flex justify-content-between align-
items-center">

<div>

<strong>{movie.title}</strong>{' '}
<span className="badge bg-info text-dark ms-2">{movie.genre}</span>
</div>
<button onClick={() => handleDelete(movie.id)} className="btn btn-outline-danger
btn-sm">
Изтрий
</button>
</li>
))}
</ul>
</div>
);
}
export default App;