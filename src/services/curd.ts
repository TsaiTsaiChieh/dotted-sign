import {setDoc, doc} from 'firebase/firestore'

import {db} from '../firebase'
/**
 * Add data
 *
 * @param  {string} col collection name
 * @param  {string} id custom document ID
 * @param  {any} data save data (single)
 * @return {Promise<string>} custom document ID or error
 */
export const createData = async (
  col: string,
  id: string,
  data: any,
): Promise<string> => {
  try {
    const docRef = doc(db, col, id)
    const result = await setDoc(docRef, data, {merge: true})
    // const docRef = await setDoc(collection(db, col), {
    //   data,
    // })
    console.log(result)
    // const {id} = docRef
    // console.info(`Document written with ID`, id)
    return Promise.resolve(id)
  } catch (error: any) {
    return Promise.reject(error)
  }
}