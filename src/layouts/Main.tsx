import Header from '../pages/Header';
import AboutMe from '../pages/AboutMe/AboutMe';
import MySkills from '../pages/MySkills/MySkills';
import MyWork from '../pages/MyWork/MyWork';
import ContactMe from '../pages/ContactMe/ContactMe';
import {GoHomeButton} from '../components/GoHome/GoHomeButton'


function Main() {
    return (
        <main >
            <Header />
            <AboutMe />
            <MySkills />
            <MyWork />
            <ContactMe />
            <GoHomeButton />
        </main>
    )
}

export default Main