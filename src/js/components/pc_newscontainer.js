import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCnewsBlock from './pc_news_block';
import PCImageBlock from './pc_news_image_block';
export default class PCNewsContainer extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">
						<div className="leftContainer">
							<div className="carousel">
								<Carousel {...settings}>
									<div><img src="./src/images/carousel_1.jpg"/></div>
									<div><img src="./src/images/carousel_2.jpg"/></div>
									<div><img src="./src/images/carousel_3.jpg"/></div>
									<div><img src="./src/images/carousel_4.jpg"/></div>
								</Carousel>
							</div>
							<PCImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"></PCImageBlock>
						</div>
						<Tabs className="tabs_news">
							<TabPane tab="头条" key="1">
								<PCnewsBlock count={22} type="top" width="100%" bordered="false"></PCnewsBlock>
							</TabPane>
							<TabPane tab="社会" key="2">
								<PCnewsBlock count={10} type="shehui" width="100%" bordered="false"></PCnewsBlock>
							</TabPane>
							<TabPane tab="体育" key="3">
								<PCnewsBlock count={22} type="tiyu" width="100%" bordered="false"></PCnewsBlock>
							</TabPane>
							<TabPane tab="科技" key="4">
								<PCnewsBlock count={22} type="keji" width="100%" bordered="false"></PCnewsBlock>
							</TabPane>
							<TabPane tab="国内" key="5">
								<PCnewsBlock count={10} type="guonei" width="100%" bordered="false"></PCnewsBlock>
							</TabPane>
						</Tabs>
						<div className="bottom_img">
							<PCImageBlock count={16} type="guonei" width="100%" cartTitle="国内头条" imageWidth="112px"></PCImageBlock>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
