import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import actionDispatchers from './actionDispatchers';
import SearchCard from 'Components/SearchCard';
import InputText from 'Components/InputText';
import Loader from 'Components/Loader';
import utils from 'Utilities/Utils';
import appStrings from 'Utilities/StringConst';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

const SEARCH_DEBOUNCE_TIME = 250;

export class Search extends Component {
    constructor(props) {
        super(props);
        this.pageRef = null;
        this.currentCardDragged = null;
        this.searchString = '';
    }

    componentDidMount(){
		this.props.searchQuery();
    }

    componentWillUnmount() {
    }

    search = (val) => {
        this.searchString = val;
        this.fetchSearchResult();
    }

    fetchSearchResult = utils.debounce(() => {
        this.props.searchQuery(this.searchString);
    }, SEARCH_DEBOUNCE_TIME);


    render() {
        let {searchResult, searchLoading, apiError} = this.props.searchStateObj;
	
        return (
            <section className="page search-page">
				<div className="searchContainer">
					<InputText keyPressMethodToCall={this.search}/>
				</div>

				{!searchLoading && searchResult && searchResult.length > 0 && (<React.Fragment>
					
					{
						searchResult.map((elm, index) => {
							return <SearchCard 
                                key={`search-card-${index}`} 
                                searchData={elm}
                                highlightText={this.searchString}
                                />
						})
					}

				</React.Fragment>)}


                {/* message when no result found */}
                {searchResult && searchResult.length === 0 && <div className="error-message">{appStrings.noResult}</div>}

                {/* loading spinner when api is called */}
                {searchLoading && <Loader loadingText={appStrings.fetchingResult}/>}

                {/* message when api fails */}
                {apiError && <div className="error-message">{appStrings.apiError}</div>}

                
            </section>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        searchStateObj: state.searchState
    }
}
  
const mapDispatchToProps = actionDispatchers;
  
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Search);