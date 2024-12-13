/* eslint-disable no-unused-vars */
import Card from "../components/Elements/Card";
import CardBalance from "../components/Fragments/Dashboard/CardBalance";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpenseBreakdown";
import CardGoal from "../components/Fragments/Dashboard/CardGoal";
import CardStatistic from "../components/Fragments/Dashboard/CardStatistic";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";
import MainLayout from "../components/Layouts/MainLayout";

const DashboardPage = () => {
 

  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardBalance/>
        <CardGoal />
        <CardBill/>
        <CardTransaction />
        <CardStatistic/>
        <CardExpenseBreakdown />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
