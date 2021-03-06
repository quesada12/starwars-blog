import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [planetID, setPlanetID] = useState(1000);

	useEffect(() => {
		setPlanetID(actions.lookPlanetID(store.characters[params.id].homeworld));
	}, []);

	return (
		<div className="container mt-5">
			<div className="rounded bg-dark text-white text-justify mb-3 p-1 pr-3 mt-4">
				<div className="row">
					<div className="col-12">
						<h1 className="text-center">{store.characters[params.id].name}</h1>
						<hr className="my-4" />
						<div className="row">
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Height</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.characters[params.id].height}</p>
							</div>
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Mass</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.characters[params.id].mass}</p>
							</div>
							<div className="col-lg-3 col-12 border-right border-secondary border-4 text-center">
								<h4>Hair Color</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.characters[params.id].hair_color}</p>
							</div>
							<div className="col-lg-3 col-12  text-center">
								<h4>Skin Color</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.characters[params.id].skin_color}</p>
							</div>
						</div>
						<div className="row mt-2">
							<div className="col-lg-4 col-12 border-right border-secondary border-4 text-center">
								<h4>Eye Color</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.characters[params.id].eye_color}</p>
							</div>
							<div className="col-lg-4 col-12 border-right border-secondary border-4 text-center">
								<h4>Birth Year</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.characters[params.id].birth_year}</p>
							</div>
							<div className="col-lg-4 col-12 text-center">
								<h4>Gender</h4>
								<hr className="my-1" />
								<p className="text-white-50">{store.characters[params.id].gender}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="text-right">
				<Link to={"/planet/" + planetID}>
					<a href="#" className="btn btn-danger btn-lg mr-3">
						Go to HomeWorld
					</a>
				</Link>
				<Link to="/">
					<span className="btn-lg btn btn-outline-light" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};
