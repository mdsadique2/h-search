import React, { Component } from 'react';
import KeyValue from '../KeyValue'
import Highlighter from "react-highlight-words";
import utils from 'Utilities/Utils';
import './style.css';
import './style-mobile.css';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.searchData = props.searchData;
        this.searchQuery = props.searchQuery;
        this.highlightText = !!props.highlightText ? props.highlightText.split(' ') : [] ;
    }

    getTimeElapsedString = (timestamp) => {
        return utils.timeAgo(timestamp);
    }

    render() {
        let {title, author, url, created_at, num_comments, story_text, relevancy_score} = this.searchData;

        return (
            <div className="card card-hover search-card">
                <section className="section-top">
                    <span className="title">
                        {
                            !!title && (
                                <Highlighter
                                    highlightClassName="higlight-text"
                                    searchWords={this.highlightText}
                                    autoEscape={true}
                                    textToHighlight={title}
                                />
                            )
                        }
                    </span>
                    <span className="url">
                        {!!url && <a href={url} target="_blank">[ {url} ]</a>}
                    </span>
                </section>

                <section className="section-bottom">
                    <KeyValue keyToDisplay="Score" value={relevancy_score} separator="|"></KeyValue>
                    <KeyValue keyToDisplay="Author" value={author} separator="|"></KeyValue>
                    <KeyValue value={this.getTimeElapsedString(created_at)} separator="|"></KeyValue>
                    <KeyValue value={`${num_comments} comments`} ></KeyValue>
                </section>


                <section className="section-story-text">
                    {
                        !!story_text && (
                            <Highlighter
                                highlightClassName="higlight-text"
                                searchWords={this.highlightText}
                                autoEscape={true}
                                textToHighlight={story_text}
                            />
                        )
                    }
                </section>
            </div>
        );
    }
}