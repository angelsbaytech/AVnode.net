import { h } from 'preact';
import Router from 'preact-router';
// Navigation
import Nav from './Nav';
// Profile
import Profile from './user/ProfilePublic';
import ProfileImages from './user/ProfileImagesContainer';
import ProfileEmails from './user/ProfileEmails';
import ProfilePrivate from './user/ProfilePrivate';
import ProfilePassword from './user/ProfilePasswordContainer';
import ProfileConnections from './user/ProfileConnections';
// Crews
import Crews from './Crews';
import CrewOrganization from './crew/CrewOrganization';
import CrewPublic from './crew/CrewPublic';
import CrewImages from './crew/CrewImages';
import CrewMembers from './crew/CrewMembers';
// Performances
import Performances from './Performances';
// import PerformanceEdit from './performance/Edit';
import PerformancePublic from './performance/PerformancePublic';
//import PerformanceAbouts from './performance/PerformanceAbouts';
import PerformanceImages from './performance/PerformanceImages';
import PerformanceEvents from './performance/PerformanceEvents';
import PerformanceAuthors from './performance/PerformanceAuthors';
import PerformancePhotoGallery from './performance/PerformancePhotoGallery';
import PerformanceVideoGallery from './performance/PerformanceVideoGallery';
import PerformanceSettings from './performance/PerformanceSettings';
// Events
import Events from './Events';
// import EventEdit from './event/Edit';
import EventPublic from './event/EventPublic';
import EventImages from './event/EventImages';
import EventPerformances from './event/EventPerformances';
import EventPartners from './event/EventPartners';
import EventPhotoGallery from './event/EventPhotoGallery';
import EventVideoGallery from './event/EventVideoGallery';
import EventSettings from './event/EventSettings';
// Preferences
import Preferences from './PreferencesContainer';
import { FormattedMessage } from 'preact-intl';

const App = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">
          <FormattedMessage
            id="account"
            defaultMessage="Account"
          /></h1>
        </div>
      </div>
      <div className="container-fluid account-nav-wrap">
        <div className="container">
          <Nav />
        </div>
      </div>
      <div className="container">
        <Router>
          <Profile path="/account/profile/public" />
          <ProfileImages path="/account/profile/images" />
          <ProfileEmails path="/account/profile/emails" />
          <ProfilePrivate path="/account/profile/private" />
          <ProfilePassword path="/account/profile/password" />
          <ProfileConnections path="/account/profile/connections" />
          <Crews path="/account/crews" />
          <CrewPublic path="/account/crew/public/:_id" />
          <CrewOrganization path="/account/crew/organization/:_id" />
          <CrewImages path="/account/crew/images/:_id" />
          <CrewMembers path="/account/crew/members/:_id" />
          <Performances path="/account/performances" />
          <PerformancePublic path="/account/performance/public/:_id" />
          <PerformanceImages path="/account/performance/images/:_id" />
          <PerformanceEvents path="/account/performance/events/:_id" />
          <PerformanceAuthors path="/account/performance/authors/:_id" />
          <PerformancePhotoGallery path="/account/performance/photogallery/:_id" />
          <PerformanceVideoGallery path="/account/performance/videogallery/:_id" />
          <PerformanceSettings path="/account/performance/settings/:_id" />
          <Events path="/account/events" />
          <EventPublic path="/account/event/public/:_id" />
          <EventImages path="/account/event/images/:_id" />
          <EventPerformances path="/account/event/performances/:_id" />
          <EventPartners path="/account/event/partners/:_id" />
          <EventPhotoGallery path="/account/event/photogallery/:_id" />
          <EventVideoGallery path="/account/event/videogallery/:_id" />
          <EventSettings path="/account/event/settings/:_id" />
          <Preferences path="/account/preferences" />
        </Router>
      </div>
    </div>
  );
};

export default App;
