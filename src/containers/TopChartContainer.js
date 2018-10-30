import React, { Component } from 'react';
import TopChartList from '../components/TopChartList';
import Selector from '../components/Selector';

class TopChartContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            charts: [],
            currentGenre: null
        };
        this.handleGenreSelected = this.handleGenreSelected.bind(this);
    }

    handleGenreSelected(label){
        const selectedGenre = this.state.charts.feed.entry.category.attributes[label];
        this.setState({currentGenre: selectedGenre});
    }

    componentDidMount(){
        return fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then((response) => response.json())
            .then((jsonData) => this.setState({charts: jsonData.feed.entry}))
    }

    render(){
        return(
            <div>
            <h2>iTunes Top 20 UK Chart</h2>
            {/* <Selector charts={this.state.charts} onGenreSelected={this.handleGenreSelected}/> */}
            <TopChartList charts={this.state.charts} />
            </div>
        );
    }
}

export default TopChartContainer;