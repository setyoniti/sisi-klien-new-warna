import { Link } from "react-router-dom";
import accounts from "../../../data/accounts";
import Card from "../../Elements/Card";
import Stepper from "../../Elements/Stepper";
import { Icon } from "../../Elements/Icon";

const CardBalance = () => {
    const balanceCard = accounts.map((account) => (
        <div key={account.id} className="p-2">
            <div className="flex justify-between">
                <div className="text-2xl font-bold">${account.balance}</div>
                <div>
                    <Link to="/balance">All account</Link>
                </div>
            </div>
            <div className="border-b-2 my-4"></div>
            <div className="flex justify-between bg-primary text-white p-4 rounded-md">
                <div>
                    Account Type
                    <br />
                    <span className="text-xl font-bold">
                        {account.accountType}
                    </span>
                    <br />
                    {account.accountNumber}
                </div>
                <div className="flex flex-col gap-5 justify-between">
                    {account.logo != "" && (
                        <img
                            className="ms-auto w-[70px]"
                            src={`/images/${account.logo}`}
                        />
                    )}

                    <div className="flex justify-center items-center gap-2">
                        <span className="text-xl font-bold">
                            ${account.balance}
                        </span>
                        <div className="bg-white max-w-min text-sm text-blue-500 rounded-full p-1">
                            <Icon.ArrowUpRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));
    return (
        <Card title="Total Balance" desc={ <Stepper  desc={balanceCard}/>} />
    )
}

export default CardBalance