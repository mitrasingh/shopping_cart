import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
	return (
		<Navbar sticky="top" className="bg-white shadow-sm mb-3">
			<Container>
				<Nav className="me-auto">
					<Nav.Link to="/" as={NavLink}>
						Home
					</Nav.Link>
					<Nav.Link to="/store" as={NavLink}>
						Store
					</Nav.Link>
					<Nav.Link to="/about" as={NavLink}>
						About
					</Nav.Link>
				</Nav>
				<Button
					style={{ width: "2.5rem", height: "2.5rem", position: "relative" }}
					className="rounded-circle"
				>
					C
					<div
						className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
						style={{
							color: "white",
							width: "1.5rem",
							height: "1.5rem",
							position: "absolute",
							bottom: 0,
							right: 0,
							transform: "translate(+25%, +25%)",
						}}
					>
						3
					</div>
				</Button>
			</Container>
		</Navbar>
	);
};
