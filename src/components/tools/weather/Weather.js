import React from 'react';
class Weather extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
		};
	}

	componentDidMount() {
		// useEffect(() => {
		// 	const fetchData = async () => {
		// 		navigator.geolocation.getCurrentPosition(function (position) {
		// 			setLat(position.coords.latitude);
		// 			setLong(position.coords.longitude);
		// 		});
		// 		await fetch(
		// 			`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
		// 		)
		// 			.then((res) => res.json())
		// 			.then((result) => {
		// 				setData(result);
		// 				console.log(result);
		// 			});
		// 	};
		// 	fetchData().catch(console.error);
		// }, [lat, long]);
	}
}
