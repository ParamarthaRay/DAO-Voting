import React, { useState } from "react";
import VotingInterface from "../components/VotingInterface";
import ProposalForm from "../components/ProposalForm";
import Results from "../components/Results";
import ProposalCountDisplay from "../components/ProposalCountDisplay";

const Home = () => {
  const [votes, setVotes] = useState([]);
  const [proposalItems, setProposalItems] = useState([
    { id: "1", title: "Implement Blockchain-based Voting System" },
    { id: "2", title: "Introduce Tiered Membership Structure for Voters" },
    { id: "3", title: "Launch a Mobile App for DAO Governance" },
    { id: "4", title: "Integrate AI for Proposal Moderation" },
    { id: "5", title: "Establish DAO Community Fund" },
    { id: "6", title: "Enable Cross-Chain Governance Features" },
    { id: "7", title: "Create a Transparent Proposal Review System" },
  ]);
  const [nextProposalId, setNextProposalId] = useState(8);

  const handleVoteSubmitted = (vote) => {
    setVotes((prevVotes) => [...prevVotes, vote]);
  };

  const handleProposalSubmitted = (proposalTitle) => {
    setProposalItems((prevItems) => [
      ...prevItems,
      { id: nextProposalId.toString(), title: proposalTitle },
    ]);
    setNextProposalId((prevId) => prevId + 1);
  };

  const votingResults = proposalItems.map((proposal) => {
    const proposalVotes = votes.filter((v) => v.proposalId === proposal.id);
    const yesVotes = proposalVotes.filter((v) => v.vote === "yes").length;
    const noVotes = proposalVotes.filter((v) => v.vote === "no").length;

    return {
      proposal: proposal.title,
      votesYes: yesVotes,
      votesNo: noVotes,
    };
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-yellow-800 mb-6">Welcome to DAO Voting</h1>
      <ProposalCountDisplay /> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VotingInterface
          proposals={proposalItems}
          onVoteSubmitted={handleVoteSubmitted}
        />
        <ProposalForm onProposalSubmitted={handleProposalSubmitted} />
      </div>
      <div className="mt-8">
        <Results results={votingResults} />
      </div>
    </div>
  );
};

export default Home;