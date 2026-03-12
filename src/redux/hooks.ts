import { AppDispatch } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = useSelector;
