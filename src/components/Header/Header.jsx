import LogoSVG from '../../assets/medicine-icon.svg';
import './Header.scss';
import Container from '../Container/Container';
import Button from '../Button/Button';

const Header = () => {
	const title = 'HABITZ';
	const description = 'Click on tabs to navigate through your subjects. Lets track those habits!';

	return (
		<div className="header">
			<div className="container top">
				<div className="media-container">
					<img className="logo" src={LogoSVG} alt="Habitz Logo" />
				</div>
				<div className="title">{title}</div>
			</div>

			<div className="container center">
				<div className="subtitle">{description}</div>
			</div>

			<div className="container bottom">
				<Button text="Exercise" />
				<Button text="Guitar" />
				<Button text="Job Applications" />
			</div>
		</div>
	);
};

export default Header;
