import { connect } from 'react-redux';
import MapPage from './MapPage';
import { getProjects, setProjectSearch, setProjectDetail } from 'modules/projects';
import getActiveProjects from 'selectors/projects_active';
import getProjectDetails from 'selectors/project_detail';
import { updateUrl } from 'modules/url';
import { setMapLocation } from 'modules/map';

const mapStateToProps = state => ({
  mapState: state.map,
  projects: getActiveProjects(state),
  projectDetail: getProjectDetails(state),
  searchQuery: state.projects.search
});

const mapDispatchToProps = dispatch => ({
  setProjectDetail(projectId) {
    dispatch(setProjectDetail(projectId));
    dispatch(updateUrl());
  },
  setMapLocation(params) {
    dispatch(setMapLocation(params));
    dispatch(updateUrl());
  },
  updateUrl() {
    dispatch(updateUrl());
  },
  getProjects() {
    dispatch(getProjects());
  },
  setProjectSearch(query) {
    dispatch(setProjectSearch(query));
    dispatch(updateUrl());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
