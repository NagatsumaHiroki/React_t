export const Practice3 = () => {
  const calcTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    let total: number = 0;
    total = calcTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題：返却地の型指定</p>
      <button onClick={onClickPractice}>練習問題3実行</button>
    </div>
  );
};
