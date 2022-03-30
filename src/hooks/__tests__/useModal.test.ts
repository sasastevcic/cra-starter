/* eslint-disable prefer-const */
import { renderHook, act } from '@testing-library/react-hooks';
import { Modal } from '../../constants/modal';
import { useModal } from '../useModal';

describe('useModal hook', () => {
	it('should open a correct modal', () => {
		const { result } = renderHook(() => useModal());
		let { modal, openModal } = result.current;

		expect(modal).toBe(null);

		act(() => {
			openModal(Modal.Test);
		});

		({ modal } = result.current);

		expect(modal).toBe(Modal.Test);
	});

	it('should open a correct modal and kills it', () => {
		const { result } = renderHook(() => useModal());
		let { modal, openModal, closeModal } = result.current;

		expect(modal).toBe(null);

		act(() => {
			openModal(Modal.Test);
		});

		({ modal } = result.current);

		expect(modal).toBe(Modal.Test);

		act(() => {
			closeModal();
		});

		({ modal } = result.current);

		expect(modal).toBe(null);
	});
});
