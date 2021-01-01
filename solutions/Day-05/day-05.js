import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import reportWebVitals from './reportWebVitals'

const containerStyle = {
 padding: 20,
 margin: 'auto',
 width: '100%',
}

const skillsWrapperStyle = {
 padding: 20,
 margin: 'auto',
 width: 300,
}
const JoinedDateWrapperStyle = {
 padding: 20,
 margin: 'auto',
 width: '100%',
}

const profileCardWrapper = {
 padding: 20,
 margin: 'auto',
 width: 300,
 backgroundColor: 'light',
}

const peopleNameStyle = {
 fontSize: 24,
 marginBottom: 10,
 color: 'dark',
}
const SkillHeader = {
 fontSize: 24,
 marginBottom: 10,
 marginTop: 10,
 color: 'dark',
}
const SecondaryTextStyle = {
 fontSize: 18,
 margin: 0,
 color: 'gray',
}

const profileImgStyle = {
 verticalAlign: 'middle',
 width: 150,
 height: 150,
 borderRadius: '50%',
 overFlow: 'hidden',
 position: 'relative',
}

const skillBadge = {
 display: 'inline-block',
 textAlign: 'center',
 fontSize: 14,
 padding: 10,
 marginRight: 4,
 height: 12,
 width: 60,
 borderRadius: 20,
 backgroundColor: '#D1D3E2',
}

const ProfileImg = ({ img }) => {
 return <img src={img} style={profileImgStyle} alt="test"></img>
}
const PeopleName = ({ firstName, lastName }) => {
 return (
  <h5 style={peopleNameStyle}>
   {firstName} {lastName}
  </h5>
 )
}

const SecondaryText = ({ job, country }) => {
 console.log(country)
 return (
  <h5 style={SecondaryTextStyle}>
   {job}, {country}
  </h5>
 )
}

const SkillBadge = ({ techs }) => {
 console.log(techs)
 return techs.map((tech) => (
  <div key={tech} style={skillBadge}>
   {tech}
  </div>
 ))
}

const ProfileCardWrapper = ({
 user: { job, country, firstName, lastName, img },
}) => {
 return (
  <div style={profileCardWrapper}>
   <ProfileImg img={img} />
   <PeopleName firstName={firstName} lastName={lastName} />
   <SecondaryText country={country} job={job} />
  </div>
 )
}

const SkillsWrapper = ({ techs }) => {
 return (
  <div style={skillsWrapperStyle}>
   <h5 style={SkillHeader}>Skills</h5>
   <SkillBadge techs={techs} />
  </div>
 )
}

const JoinedDateWrapper = () => {
 return <div style={JoinedDateWrapperStyle}></div>
}

const Container = ({ data, user, techs }) => {
 return (
  <div style={containerStyle}>
   <ProfileCardWrapper user={user} />
   <SkillsWrapper techs={techs} />
   <JoinedDateWrapper data={data} />
  </div>
 )
}

const App = () => {
 const data = {
  welcome: 'Welcome to 30 Days Of React',
  title: 'Getting Started React',
  job: 'Software Developer',
  country: 'Thailand',
  author: {
   firstName: 'Maew',
   lastName: 'Maew',
  },
  date: new Date(), // date needs to be formatted to a human readable format
 }
 const techs = ['HTML', 'CSS', 'JavaScript']
 const user = {
  ...data.author,
  img:
   'https://www.catdumb.com/wp-content/uploads/2017/02/%E0%B9%81%E0%B8%A1%E0%B8%A7-89.jpg',
  job: data.job,
  country: data.country,
 }
 return (
  <div className="app">
   <Container data={data} user={user} techs={techs} />
  </div>
 )
}

const root = document.querySelector('#root')
ReactDOM.render(
 <React.StrictMode>
  <App />
 </React.StrictMode>,
 root
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
