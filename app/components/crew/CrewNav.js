import { h } from 'preact';
import { connect } from 'preact-redux';
import { navigate } from '../../reducers/actions';
import { FormattedMessage } from 'preact-intl';
// import { route, Router, Route, Link } from 'preact-router';

const CrewNav = ({ user, dispatch, url }) => {
    let id = url.substring(url.lastIndexOf('/') + 1);
    const classes = (path) => {
        console.log('PeNav--> user.active:' + user.active + ' id:' + id + ' url:' + url + '--> user.id:' + user.id + ' path:' + path + ' found:' + user.active.indexOf(path));
        if (url.indexOf(path) > -1) {
            console.log('PNav--> perf' + JSON.stringify(crew));
        }
        return (url.indexOf(path) > -1) ? 'nav-link active' : 'nav-link'
    }

    return (
        <div>
            <pre>CrewNav:{user.active} URL:{url}</pre>
            <nav id="account-sidenav" class="nav-justified pull-left">
                <a className={classes('/account/crew/public/'+id)} href={`/account/crew/public/${id}`} onClick={e => { dispatch(navigate('/account/crew/public/'+id)) }}>
                    <FormattedMessage
                        id="publicData"
                        defaultMessage="Public data"
                    />
                </a>
                <a className={classes('/account/crew/images/'+id)} href={`/account/crew/images/${id}`} onClick={e => { dispatch(navigate('/account/crew/images/'+id)) }}>
                    <FormattedMessage
                        id="images"
                        defaultMessage="Images"
                    />
                </a>
                <a className={classes('/account/crew/members/'+id)} href={`/account/crew/members/${id}`} onClick={e => { dispatch(navigate('/account/crew/members/'+id)) }}>
                    <FormattedMessage
                        id="members"
                        defaultMessage="Members"
                    />
                </a>
            </nav>
        </div>
    );
};

const mapStateToProps = ({ user, crew }) => ({
    user: user,
    crew: crew
});

export default connect(mapStateToProps)(CrewNav);