'use client';
import { UseArrExpandParams, UseArrExpandReturn } from '@/types/static-type';
import { useState } from 'react';
/**
 * useArrExpand hook to manipulate an array by collapse and expanding it.
 * @property {Array} arr - The original array.
 * @property {number} initLeng - Initial length to slice the array.
 * @property {Array} slicedArr - The sliced array based on initial length.
 * @property {Function} expandArrFn - Function to expand the array by slicing it.
 * @param {UseArrExpandParams} initialObject - Parameters for useArrExpand hook.
 * @returns {UseArrExpandReturn} - Return object with slicedArr and expandArrFn.
 */

export default function useArrExpand({ arr, initLeng }:UseArrExpandParams):UseArrExpandReturn {
	const [{modifiedArr,arrExpanded}, setModifiedArr] = useState({
		modifiedArr:arr.slice(0, initLeng),
		arrExpanded:false
	});

	/**
	 * Function to expand and collapse the array by slicing it.
	 * Default params value is total array length.
	 * @param {number} [sliceNum=modifiedArr.length - 1] - Number of elements to slice.
	 */
	const handleArr = (sliceNum: number = arr.length - 1) => {
		if(arrExpanded) {
			setModifiedArr({
				arrExpanded:false,
				modifiedArr:arr.slice(0, initLeng)
			});
		} else {
			setModifiedArr({
				arrExpanded:true,
				modifiedArr:arr.slice(0, sliceNum)
			});
		}
	};

	return {
		slicedArr: modifiedArr,
		arrExpanded,
		handleArr,
	};
}
