import React, { Component } from 'react';

import './js/ui';

import './css/base.css';
import './css/layout.css';
import './css/component.css';
import './css/page.css';
import './css/response.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import URL from './context/url';
import CODE from 'context/code';

import EgovHeader from 'egov/common/EgovHeader';
import EgovFooter from 'egov/common/EgovFooter';
import EgovInfoPopup from 'egov/common/EgovInfoPopup';
import EgovError from 'egov/common/EgovError';
//import EgovContainer from 'egov/common/EgovContainer';

import EgovMain from 'egov/main/EgovMain';
import EgovLogin from 'egov/login/EgovLogin';

import EgovAboutSite from 'egov/about/EgovAboutSite';
import EgovAboutHistory from 'egov/about/EgovAboutHistory';
import EgovAboutOrganization from 'egov/about/EgovAboutOrganization';
import EgovAboutLocation from 'egov/about/EgovAboutLocation';

import EgovIntroWork from 'egov/intro/EgovIntroWork';
import EgovIntroService from 'egov/intro/EgovIntroService';

import EgovSupportDownloadList from 'egov/support/download/EgovDownloadList';
import EgovSupportDownloadDetail from 'egov/support/download/EgovDownloadDetail';
import EgovSupportDownloadCreate from 'egov/support/download/EgovDownloadCreate';
import EgovSupportQnaList from 'egov/support/qna/EgovQnaList';
import EgovSupportQnaDetail from 'egov/support/qna/EgovQnaDetail';
import EgovSupportApply from 'egov/support/apply/EgovSupportApply';

import EgovDailyList from 'egov/inform/daily/EgovDailyList';
import EgovWeeklyList from 'egov/inform/weekly/EgovWeeklyList';

import EgovNoticeList from 'egov/inform/notice/EgovNoticeList';
import EgovNoticeDetail from 'egov/inform/notice/EgovNoticeDetail';
import EgovNoticeEdit from 'egov/inform/notice/EgovNoticeEdit';

import EgovGalleryList from 'egov/inform/gallery/EgovGalleryList';
import EgovGalleryDetail from 'egov/inform/gallery/EgovGalleryDetail';
import EgovGalleryCreate from 'egov/inform/gallery/EgovGalleryCreate';

import EgovAdminScheduleList from 'egov/admin/schedule/EgovAdminScheduleList';
import EgovAdminTemplateList from 'egov/admin/template/EgovAdminTemplateList';
import EgovAdminBoardList from 'egov/admin/board/EgovAdminBoardList';
import EgovAdminBoardDetail from 'egov/admin/board/EgovAdminBoardDetail';
import EgovAdminBoardModify from 'egov/admin/board/EgovAdminBoardModify';
import EgovAdminUsageList from 'egov/admin/usage/EgovAdminUsageList';

import EgovAdminNoticeList from 'egov/admin/notice/EgovAdminNoticeList';
import EgovAdminNoticeDetail from 'egov/admin/notice/EgovAdminNoticeDetail';
import EgovAdminNoticeCreate from 'egov/admin/notice/EgovAdminNoticeCreate';

import EgovAdminGalleryList from 'egov/admin/gallery/EgovAdminGalleryList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVO: null
    }
  }
  render() {
    console.log('App render');
    return (
      <div className="wrap">
        <Switch>
          <Route exact path={URL.ERROR} component={EgovError}/>
          <Route>
          <EgovHeader
          loginVO={this.state.loginVO}
          onChangeLogin={function (_loginVO) {
            console.log(_loginVO);
            this.setState(_loginVO);
            console.log("app EgovHeader = ", this.state.loginVO);
          }.bind(this)}></EgovHeader>
        <Switch>
          {/* MAIN */}
          <Route exact path={URL.MAIN}>
            <EgovMain></EgovMain>
          </Route>

          {/* LOGIN */}
          <Route path={URL.LOGIN}>
            <EgovLogin onChangeLogin={function (_loginVO) {
              console.log("App isEgovLogin _loginVO= ", _loginVO);
              this.setState(_loginVO);
              console.log("app EgovLogin= ", this.state.loginVO);
            }.bind(this)}></EgovLogin>
          </Route>

          {/* LOGIN */}
          <Route path={URL.ERROR} component={EgovError} />

          {/* ABOUT */}
          <Redirect exact from={URL.ABOUT} to={URL.ABOUT_SITE} />
          <Route path={URL.ABOUT_SITE} component={EgovAboutSite} />
          <Route path={URL.ABOUT_HISTORY} component={EgovAboutHistory} />
          <Route path={URL.ABOUT_ORGANIZATION} component={EgovAboutOrganization} />
          <Route path={URL.ABOUT_LOCATION} component={EgovAboutLocation} />

          {/* INTRO */}
          <Redirect exact from={URL.INTRO} to={URL.INTRO_WORKS} />
          <Route exact path={URL.INTRO_WORKS} component={EgovIntroWork} />
          <Route exact path={URL.INTRO_SERVICE} component={EgovIntroService} />

          {/* SUPPORT */}
          <Redirect exact from={URL.SUPPORT} to={URL.SUPPORT_DOWNLOAD} />

          <Route exact path={URL.SUPPORT_DOWNLOAD} component={EgovSupportDownloadList} />
          <Route path={URL.SUPPORT_DOWNLOAD_DETAIL} component={EgovSupportDownloadDetail} />
          <Route path={URL.SUPPORT_DOWNLOAD_CREATE} component={EgovSupportDownloadCreate} />

          <Route exact path={URL.SUPPORT_QNA} component={EgovSupportQnaList} />
          <Route exact path={URL.SUPPORT_QNA_DETAIL} component={EgovSupportQnaDetail} />
          
          <Route exact path={URL.SUPPORT_APPLY} component={EgovSupportApply} />

          {/* INFORM */}
          <Redirect exact from={URL.INFORM} to={URL.INFORM_DAILY} />

          <Route path={URL.INFORM_DAILY} component={EgovDailyList} />
          <Route path={URL.INFORM_WEEKLY} component={EgovWeeklyList} />

          <Route exact path={URL.INFORM_NOTICE} component={EgovNoticeList} />
          <Route path={URL.INFORM_NOTICE_DETAIL} component={EgovNoticeDetail} />
          {/* <Route path={URL.INFORM_NOTICE_DETAIL} component={() => <EgovNoticeDetail/>} /> */}
          {/* <Route path={URL.INFORM_NOTICE_CREATE} component={EgovNoticeCreate} /> */}
          <Route path={URL.INFORM_NOTICE_CREATE} render={() => <EgovNoticeEdit mode={CODE.MODE_CREATE} />} />
          <Route path={URL.INFORM_NOTICE_MODIFY} render={() => <EgovNoticeEdit mode={CODE.MODE_MODIFY} />} />
          <Route path={URL.INFORM_NOTICE_REPLY} render={() => <EgovNoticeEdit mode={CODE.MODE_REPLY} />} />

          <Route exact path={URL.INFORM_GALLERY} component={EgovGalleryList} />
          <Route path={URL.INFORM_GALLERY_DETAIL} component={EgovGalleryDetail} />
          <Route path={URL.INFORM_GALLERY_CREATE} render={() => <EgovGalleryCreate mode="new" />} />
          <Route path={URL.INFORM_GALLERY_MODIFY} render={() => <EgovGalleryCreate mode="edit" />} />
          <Route path={URL.INFORM_GALLERY_REPLY} render={() => <EgovGalleryCreate mode="reply" />} />

          {/* ADMIN */}
          <Redirect exact from={URL.ADMIN} to={URL.ADMIN_SCHEDULE} />

          <Route path={URL.ADMIN_SCHEDULE} component={EgovAdminScheduleList} />
          <Route path={URL.ADMIN_TEMPLATE} component={EgovAdminTemplateList} />

          <Route exact path={URL.ADMIN_BOARD} component={EgovAdminBoardList} />
          <Route path={`${URL.ADMIN_BOARD_DETAIL}/:boardId`} component={EgovAdminBoardDetail} />
          <Route path={`${URL.ADMIN_BOARD_MODIFY}/:boardId`} component={EgovAdminBoardModify} />

          <Route path={URL.ADMIN_USAGE} component={EgovAdminUsageList} />

          {/* <Route exact path={URL.ADMIN_NOTICE} component={EgovAdminNoticeList} />
          <Route path={URL.ADMIN_NOTICE_DETAIL} render={() => <EgovAdminNoticeDetail mode="new"/>} />
          <Route path={URL.ADMIN_NOTICE_MODIFY} render={() => <EgovNoticeCreate mode="edit"/>} /> */}


          <Route path={URL.ADMIN_GALLERY} component={EgovAdminGalleryList} />
          <Route path={URL.ADMIN_BOARD_CREATE} component={EgovAdminBoardModify} />

        </Switch>
        <EgovFooter></EgovFooter>
        <EgovInfoPopup></EgovInfoPopup>
          </Route>
        </Switch>
        
      </div>
    )
  }
}

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("process.env.REACT_APP_EGOV_CONTEXT_URL", process.env.REACT_APP_EGOV_CONTEXT_URL);


export default App;
