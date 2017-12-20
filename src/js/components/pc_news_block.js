import React from 'react';
import {Card} from 'antd';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
export default class PCnewsBlock extends React.Component {
	constructor() {
		super();
		this.state = {
			news: ''
		};
	}
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
	};
	render() {
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
        <Router>
            <li key={newsItem.uniquekey.toString()}>
              <Link to={`#/details/${newsItem.uniquekey}`} target="_blank">
                {newsItem.title}
              </Link>
            </li>
        </Router>
			))
			: '没有加载到任何新闻';
		return (
			<div className="topNewsList">
				<Card>
					<ul>
						{newsList}
					</ul>
				</Card>
			</div>
		);
	};
}
