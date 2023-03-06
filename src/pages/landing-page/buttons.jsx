import style from './styles.module.scss';

const Buttons = () => {
	return (
		<div className={style.buttons}>
			<button>Request anything</button>
			<button>Create Events</button>
			<button>Auction Items</button>
		</div>
	)
}

export default Buttons