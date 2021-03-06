import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
// import CreateExperienceItemFormContainer from '../experience_items/create_experience_item_form_container';
// import EditExperienceItemFormContainer from '../experience_items/edit_experience_item_form_container';
// import CreateEducationItemFormContainer from '../education_items/create_education_item_form_container';
// import EditEducationItemFormContainer from '../education_items/edit_education_item_form_container';
// import EditSummaryContainer from '../user/edit_summary_container';
// import EditIntroContainer from '../user/edit_intro_container';
import CreatePostFormContainer from './create_post_form'
// import CreateSkillFormContainer from '../skills/create_skill_form';
// import EndorsementShowContainer from '../skills/endorsement_show';

function Modal(props) {

    const { closeModal } = props;
    let modal;
    let user;

    if (props.modal && typeof props.modal === 'object') {
        modal = props.modal.modal;

        // if (props.modal.experienceItem) {
        //     experienceItem = props.modal.experienceItem;
        // } else if (props.modal.educationItem) {
        //     educationItem = props.modal.educationItem;
        // } else 
        if (props.modal.user) {
            user = props.modal.user;
        // } else if (props.modal.skill) {
        //     skill = props.modal.skill;
        }
    } else {
        modal = props.modal;
    }



    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'create post':
            component = <CreatePostFormContainer user={user} />;
            break;
        default:
            return null;
    }


    let modalClass;
    if (modal == 'create post') {
        modalClass = 'modal-child-post';

    } else {
        modalClass = 'modal-child';
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className={modalClass} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        modal: state.entities.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);