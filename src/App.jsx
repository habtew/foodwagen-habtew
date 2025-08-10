import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/Main/Main'
import './App.css'


const API_URL = 'https://6852821e0594059b23cdd834.mockapi.io/Food'


function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [allMeals, setAllMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        
        const formattedData = data.map(item => ({
          id: item.id,
          name: item.name,
          image: item.avatar, 
          logo: item.logo,
          rating: parseFloat(item.rating), 
          status: item.open ? 'Open' : 'Closed', 
        }));
        
        setAllMeals(formattedData);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const filteredMeals = allMeals.filter(meal => 
    meal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='app'>
      <Header />
      <Hero 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      <Main 
        meals={filteredMeals} 
        isLoading={isLoading}
        error={error}
        />
    </div>
  )
}

export default App
