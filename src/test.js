import React from 'react';

const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]

  const [searchTerm, setSearchTerm] = React.useState(
        localStorage.getItem('search') ||  'React'
    );

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

//   You can tell React to skip applying an effect if certain values haven’t changed between re-renders. 
//   To do so, pass an array as an optional second argument to useEffect

  React.useEffect(() => {
      localStorage.setItem('search', searchTerm);
  }, [searchTerm]); // Only re-run the effect if searchTerm changes


  const searchedStories = stories.filter(story => 
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
 
  return (
    <div>
       <h1>My Hacker stories</h1>
       <Search search={searchTerm} onSearch={handleSearch} />
       < hr />
       <List list={searchedStories} />
    </div>
  )

}


const Search = ({search, onSearch}) => {
  

  return (
    <div>
      <label htmlFor="search">Search : </label>
      <input id="search" type="text" value={search} onChange={onSearch} />
    </div>
  )

}

const List = ({list}) => 

list.map(item => <Item key = {item.objectID} item={item} />)

const Item = ({item}) => (
  <div>
    <a href={item.url}>{item.title}</a>
    <span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </span>
  </div>
)

export default App;