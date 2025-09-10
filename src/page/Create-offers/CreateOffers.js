import React, {useState} from "react";
import PlusIcon from "../../assets/icon/plus-white.svg";
import PercentageIcon from "../../assets/icon/percentage.svg";
import OfferNameIcon from "../../assets/icon/offers-fill.svg";
import OfferCard from "../../components/OfferCard"; // 👈 import kiya

const CreateOffers = () => {
    const [offerList, setOfferList] = useState([]); // offers data
    const [formData, setFormData] = useState({
        name: "",
        offer: "",
    });

    const [showModal, setShowModal] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // Add new offer
    const handleAddOffer = () => {
        if (formData.name && formData.offer) {
            setOfferList([...offerList, formData]);
        }
        setFormData({name: "", offer: ""});
        setShowModal(false);
    };

    return (
        <>
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between pb_40">
                            <h2 className="heading">Offers ({offerList.length})</h2>
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowModal(true)}
                            >
                                <img className="img-fluid" src={PlusIcon} alt="plus icon"/>
                                Add Offer
                            </button>
                        </div>

                        {offerList.length === 0 ? (
                            <div className="text-center py-5 fs_24 opacity-50 text-black ">
                                No Staff available. <br/>
                                Add Staff to start Franchise orders.
                            </div>
                        ) : (
                            <div className="offer-grid d-flex flex-wrap gap-4">
                                {offerList.map((offer, index) => (
                                    <OfferCard
                                        key={index}
                                        title={offer.name}
                                        discount={offer.offer}
                                        actionText="Share to Customers"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-md">
                        <div className="modal-content custom-modal">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Offer</h5>
                            </div>
                            <div className="modal-body">
                                <div className="form-action action-border mb_20">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" src={OfferNameIcon} alt="Logo"/>
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1">
                                        <label htmlFor="offer-name" className="form-label">
                                            Offer Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="offer-name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="TRYNEW"
                                        />
                                    </div>
                                </div>

                                <div className="form-action action-border mb_20">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" src={PercentageIcon} alt="Logo"/>
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1">
                                        <label htmlFor="set-offer" className="form-label">
                                            Set percentage For your Offer
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="set-offer"
                                            name="offer"
                                            value={formData.offer}
                                            onChange={handleChange}
                                            placeholder="25%"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button
                                    className="btn btn-border"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-primary my-0 me-0 ml_14"
                                    onClick={handleAddOffer}
                                >
                                    <img className="img-fluid" src={PlusIcon} alt="plus icon"/>
                                    Add Offer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateOffers;
