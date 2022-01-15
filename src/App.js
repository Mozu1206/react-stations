// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */

export const App = () => {
  const [dogUrl, setDogUrl] = React.useState('https://images.dog.ceo/breeds/mountain-swiss/n02107574_2662.jpg');

  return (
    <div>
      <header>Dog App</header>
      <p>This web page is for dog lovers</p>
      <img src={dogUrl} alt='A cute dog image' />
    </div>
  )
}
