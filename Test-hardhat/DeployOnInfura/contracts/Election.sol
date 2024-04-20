//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Election {
    // Model a Candidate
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    // Store accounts that have voted
    mapping(address => mapping(uint256 => bool)) public voters;

    // Read/write candidates
    mapping(uint256 => Candidate) public candidates;

    // Store Candidates Count
    uint256 public candidatesCount;

    constructor() {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
        addCandidate("Candidate 3");
        addCandidate("Candidate 4");
        addCandidate("Candidate 5");
    }

    function addCandidate(string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote(uint256 _candidateId) public {
        // Require a valid candidate
        require(
            _candidateId > 0 && _candidateId <= candidatesCount,
            "Invalid candidate ID."
        );

        // Record that voter has voted
        voters[msg.sender][_candidateId] = true;

        // Update candidate vote Count
        candidates[_candidateId].voteCount++;

        // Emit voted event
        emit VotedEvent(_candidateId, msg.sender);
    }

    event VotedEvent(uint256 indexed _candidateId, address indexed _voter);
}
