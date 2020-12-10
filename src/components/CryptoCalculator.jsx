import React, { useState, useEffect } from 'react';
import { Form, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { connect } from 'react-redux';



const CryptoCalculator = ({ changeRates, selectedCrypto, uahPrice, rubPrice }) => {

    const radios = [
        { name: "UAH", value: 1, price: uahPrice },
        { name: "USD", value: 2, price: changeRates.usd },
        { name: "RUR", value: 3, price: rubPrice },
    ];

    const [queryValue, setQueryValue] = useState('0');
    const [radioValue, setRadiovalue] = useState('1');
    const [currencyPrice, setCurrencyPrice] = useState(uahPrice);

    useEffect(() => {
        setCurrencyPrice(changeRates.uah)
    }, [changeRates.uah, uahPrice, rubPrice]);

    const onChangeCurrency = (val) => {
        setRadiovalue(val);
        setCurrencyPrice(radios[val -1].price);
    }

    const multiplication = selectedCrypto.priceUsd * currencyPrice;

    return (
        <div className="calculator__wrap">
            <Form>
                <div className="calculator__form-inner">
                    <Form.Label>Volume: </Form.Label>
                    <Form.Control type="number" placeholder="0" onChange={(e) => setQueryValue(e.target.value)} />
                </div>
            </Form>
            <ToggleButtonGroup type="radio" name="radio" defaultValue={1}>
                {changeRates && radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => onChangeCurrency(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <p><b>{queryValue} {selectedCrypto.symbol}</b>&nbsp; will be <b> {(queryValue * multiplication).toFixed(1)} in {radios[radioValue - 1].name}</b></p>
        </div>
    )
};

const mapStateToProps = (state) => ({
    selectedRadio: state.radioValue,
});

export default connect(mapStateToProps)(CryptoCalculator);
