/// <reference types="@antv/util" />
declare namespace Interfaces {
    interface Mix {
        <T, U1, U2, U3, U4, U5, U6>(deep: boolean, dst: T, src1: U1, src2?: U2, src3?: U3, src4?: U4, src5?: U5, src6?: U6): GUtil.Overwrite<T, U1, U2, U3, U4, U5, U6>;
        <T, U1, U2, U3, U4, U5, U6>(dst: T, src1: U1, src2?: U2, src3?: U3, src4?: U4, src5?: U5, src6?: U6): GUtil.Overwrite<T, U1, U2, U3, U4, U5, U6>;
    }
}
export default Interfaces;
