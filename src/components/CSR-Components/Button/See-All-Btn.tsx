import { SeeAllBtnProp } from '@/types/static-type';
import { RxCaretRight } from 'react-icons/rx';

export default function SeeAllBtn({
	children,
	resFun,
}: SeeAllBtnProp) {

	return (
		<div
			className={ `d-full-center` }
			onClick={ resFun }
		>
			<div>
				<button className={`see-all-btn`}>{ children }</button>
			</div>
			<div>
				<RxCaretRight size={18}/>
			</div>
		</div>
	);
}