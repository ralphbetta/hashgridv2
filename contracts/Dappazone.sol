// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract Dappazone {
    address public owner;
    string public name;

    struct Product {
        uint256 id;
        string name;
        string category;
        string image;
        uint256 cost;
        uint256 rating;
        uint256 stock;
    }

        struct Order {
        uint256 time;
        Product product;
    }

    mapping (uint256 => Product) public products;
    mapping (address => uint256) public orderCount;
    mapping (address => mapping (uint256 => Order)) public orders;


    event NewList(string name, uint256 cost, uint256 quantity);
    event Buy(address buyer, uint256 ordercount, uint256 productId);


    constructor() {
        name = "Dappazone";
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(owner == msg.sender, "Only owner can list new product");
        _;
    }

    function readName() public view returns (string memory) {
        return name;
    }

    // List product -- creating new product.
    function listProduct(
        uint256 _id,
        string memory _name,
        string memory _category,
        string memory _image,
        uint256 _cost,
        uint256 _rating,
        uint256 _stock
    ) public onlyOwner {
        // Create Item struct.
        Product memory product = Product(
            _id,
            _name,
            _category,
            _image,
            _cost,
            _rating,
            _stock
        );
        // add to product.
        products[_id] = product;
        emit NewList(_name, _cost, _stock);
    }

    // Buy Product
    function buy(uint256 _id) public payable {

        Product memory product = products[_id];

        require(msg.value >= product.cost, "Insufficient Amount");

        Order memory order = Order(block.timestamp, product);
        
        orderCount[msg.sender] += 1;

        orders[msg.sender][orderCount[msg.sender]] = order;

        products[_id].stock = product.stock - 1;

        emit Buy(msg.sender, orderCount[msg.sender], product.id);

    }

        // Buy Product
    function withdraw() public onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success);

    }


    receive() external payable {}

}
