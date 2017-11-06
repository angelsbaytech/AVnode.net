import { h } from 'preact';
import { connect } from 'preact-redux';
import { Field, reduxForm } from 'redux-form';
import { injectIntl, FormattedMessage } from 'preact-intl';
import Link from '../link/Link';
import LinkType from '../link/LinkType';
import Layout from '../Layout';
import {
    editUserLinks
} from '../../reducers/actions';

let ProfileLinksForm = props => {
    console.log( JSON.stringify(props) );
    const { handleSubmit, dispatch, user, intl } = props;

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <fieldset className="form-group">
                    <legend>
                        <FormattedMessage
                            id="links"
                            defaultMessage="Links"
                        />
                    </legend>

                    <div className="row">
                        <div className="col-md-9 form-group">
                            <label htmlFor="link">
                                <FormattedMessage
                                    id="addlink"
                                    defaultMessage="Add link"
                                />
                            </label>
                            <div className="input-group">
                                <Field
                                    className="form-control"
                                    name="link"
                                    component="input"
                                    placeholder={intl.formatMessage({
                                        id: 'link.placeholder',
                                        defaultMessage: 'https://www...'
                                    })}
                                />
                            </div>
                        </div>
                        <div className="col-md-3 form-group">
                            <label htmlFor="linktype">
                                <FormattedMessage
                                    id="linktype"
                                    defaultMessage="Link type"
                                />
                            </label>
                            {LinkType ?
                                <Field
                                    className="form-control custom-select"
                                    name="linktype"
                                    component="select"
                                    value={user.linktype}
                                >
                                    <option value="web">
                                        <FormattedMessage
                                            id="Please select"
                                            defaultMessage="Please select"
                                        />
                                    </option>
                                    {LinkType.map((c) => (
                                        <option value={c.key.toLowerCase()}>{c.name}</option>
                                    ))
                                    }
                                    { /*  */}
                                </Field> :
                                <p>Loading a link types…</p>
                            }
                        </div>
                    </div>

                    <label>
                        <FormattedMessage
                            id="link"
                            defaultMessage="Manage your links"
                        />
                    </label>
                    <ul className="list-group mt-2">
                        {
                            user && user.links && user.links.map((l) => (
                                <Link link={l} />
                            ))
                        }
                    </ul>
                </fieldset>


                <div className="form-group">
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        <FormattedMessage
                            id="form.save"
                            defaultMessage="Save"
                        />
                    </button>
                </div>

            </form>
        </Layout >
    );
};

ProfileLinksForm = injectIntl(reduxForm({ form: 'userlinks' })(ProfileLinksForm));

const EditProfileLinks = props => {
    const onSubmit = (props, dispatch) => {
        dispatch(editUserLinks(props));
    };
    return (
        <ProfileLinksForm
            initialValues={props.user}
            onSubmit={onSubmit}
            {...props}
        />
    );
};

const mapStateToProps = (state, props) => {
    console.log('props:' +  JSON.stringify(props) );
    console.log('state:' + JSON.stringify(state) );
    
    return {
        user: state.user
    };
};
const mapDispatchToProps = (dispatch) => ({
    complete: dispatch(editUserLinks)
  });
export default connect(mapStateToProps, mapDispatchToProps)(EditProfileLinks);