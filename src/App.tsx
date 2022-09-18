import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscor } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import {ThemeContextProvider} from './components/context/ThemeContext'
import {Box} from './components/context/Box'
import {UserContextProvider} from './components/context/UserContext'
import {User2} from './components/context/User2'
import { Domref } from './components/context/Domref';
import { Mutableref } from './components/context/Mutableref';
import { ClassCounter } from './components/class/ClassCounter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/GenericProps/List';
import { RandomNumber } from './components/Restriction/RandomNumber';
import { Toast } from './components/TemplateLiterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/text';
function App() {
  const personName={
    first:'Bruce',
    last:'Wayne'
  }
  const nameList=[
    {
      first:'Bruce',
      last:'Wayne'
    },
    {
      first:'Clark',
      last:'Kent'
    },
    {
      first:'Great',
      last:'Diana'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Greet name="P.T." messageCount={10} isLoggedIn={true}/>
        <Person name={personName}/>
        <PersonList names={nameList}/>
        <Status status='success'/>
        <Heading>Placeholder Text</Heading>
        <Oscor>
          <Heading>
          Oscar Goes to P.T.
          </Heading>
        </Oscor>
        <Button handleClick={(event,id)=>{
          console.log('Button Clicked',event,id)
        }}/>
        <Input value='' handleChange={(event)=>console.log(event)}/>
        <Container styles={{border:'3px solid dodgerblue',padding:'1rem'}}/>
        <LoggedIn/>
        <User/>
        <Counter/>

        <ThemeContextProvider>
          <Box/>
        </ThemeContextProvider>

        <UserContextProvider>
          <User2/>
        </UserContextProvider>

        <Domref/>
        <Mutableref/>

        <ClassCounter message='Hello,P.T.'/>

        <Private isLoggedIn={true} component={Profile}/>

        <List 
        items={['Batman','Hero','Champ']}
        onClick={(item)=>console.log(item)}
        />
        <List items={[1,2,3]} onClick={(item)=>console.log(item)} />

        <RandomNumber value={10} isPositive/>

        <Toast position='left-center'/>

        <CustomButton variant='primary' onClick={()=>console.log('clicked')}>
          <h2>Primary Button</h2>
        </CustomButton>

        <Text as='h1' size='lg'>Heading</Text>
        <Text as='p' size='md'>Paragraph</Text>
        <Text as='label' htmlFor='someId' size='sm' color='secondary'>
          Label
        </Text>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
