import React from "react";
import { connect } from "react-redux";
import "../css/index.css";
import CartSummary from "./CartSummary";
import TotalCart from "./TotalCart";

const Checkout = ({ cart }) => {
	return (
		<div className="container-cart">
			<div className="extra-mt">
				<div className="card border-success mb-3">
					<div className="card-header bg-transparent border-success">
						<h2 className="text-center">Checkout</h2>
					</div>
					<div class="card-body text-success container-chekcout">
						{cart.map((item) => (
							<CartSummary key={item.id} dataProduct={item} />
						))}
					</div>
					<div className="card-footer bg-transparent border-success container-chekcout">
						<TotalCart />
					</div>
				</div>

				<div className="d-grid gap-2 py-4">
					<button className="btn btn-success" type="button">
						Pay out
					</button>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cart: state.item.cart,
});

export default connect(mapStateToProps)(Checkout);
